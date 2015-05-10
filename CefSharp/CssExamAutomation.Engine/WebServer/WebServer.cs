namespace CssExamAutomation.Engine.WebServer
{
    using System;
    using System.Collections.Generic;
    using System.Net;
    using System.Text;
    using System.Threading;

    public class WebServer : IWebServer
    {
        private readonly HttpListener httplistener;

        private readonly Dictionary<string, byte[]> resources; 

        public WebServer(string serverPrefix = "http://localhost:1337/")
        {
            this.resources = new Dictionary<string, byte[]>
                                 {
                                     { "/", Encoding.UTF8.GetBytes("<h1>Hi!</h1>") },
                                     { "/index.html", Encoding.UTF8.GetBytes("<h1>Hi!</h1>") },
                                     { "404", Encoding.UTF8.GetBytes("<h1>Not found!</h1>") }
                                 };

            this.httplistener = new HttpListener();
            this.httplistener.Prefixes.Add(serverPrefix);
        }

        public void RegisterResource(string path, byte[] contentBytes)
        {
            if (this.resources.ContainsKey(path))
            {
                this.resources[path] = contentBytes;
            }
            else
            {
                this.resources.Add(path, contentBytes);
            }
        }

        public void RegisterResource(string path, string contentString)
        {
            this.RegisterResource(path, Encoding.UTF8.GetBytes(contentString));
        }

        public void Run()
        {
            this.httplistener.Start();

            ThreadPool.QueueUserWorkItem(
                o =>
                    {
                        Console.WriteLine("Webserver running...");
                        try
                        {
                            while (this.httplistener.IsListening)
                            {
                                ThreadPool.QueueUserWorkItem(
                                    c =>
                                        {
                                            var ctx = c as HttpListenerContext;
                                            try
                                            {
                                                byte[] buf;
                                                if (this.resources.ContainsKey(ctx.Request.Url.PathAndQuery))
                                                {
                                                    buf = this.resources[ctx.Request.Url.PathAndQuery];
                                                }
                                                else
                                                {
                                                    buf = this.resources["404"];
                                                }

                                                ctx.Response.ContentLength64 = buf.Length;
                                                ctx.Response.OutputStream.Write(buf, 0, buf.Length);
                                            }
                                            catch
                                            {
                                                // suppress any exceptions
                                            }
                                            finally
                                            {
                                                // always close the stream
                                                ctx.Response.OutputStream.Close();
                                            }
                                        },
                                    this.httplistener.GetContext());
                            }
                        }
                        catch
                        {
                        }
                    });
        }

        public void Stop()
        {
            this.httplistener.Stop();
            this.httplistener.Close();
        }

        public void Dispose()
        {
            this.Stop();
        }
    }
}