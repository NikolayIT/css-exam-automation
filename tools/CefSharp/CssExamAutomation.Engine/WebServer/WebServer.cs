namespace CssExamAutomation.Engine.WebServer
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Net;
    using System.Net.Sockets;
    using System.Text;
    using System.Threading.Tasks;

    using uhttpsharp;
    using uhttpsharp.Handlers;
    using uhttpsharp.Listeners;
    using uhttpsharp.RequestProviders;

    public class WebServer : IWebServer
    {
        private readonly HttpServer httpServer;

        private readonly Dictionary<string, byte[]> resources; 

        public WebServer(int port = 80)
        {
            this.resources = new Dictionary<string, byte[]>
                                 {
                                     { "/", Encoding.UTF8.GetBytes("<h1>Hi!</h1>") },
                                     { "/index.html", Encoding.UTF8.GetBytes(File.ReadAllText(@"C:\Users\Nikolay\Desktop\index.html") + "<img src=\"https://i.ytimg.com/vi/GrjQoHy4THY/mqdefaul2t.jpg\" width=0 height=0>") },
                                     { "/style.css", Encoding.UTF8.GetBytes(File.ReadAllText(@"C:\Users\Nikolay\Desktop\style.css")) },
                                     { "404", Encoding.UTF8.GetBytes("<h1>Not found!</h1>") }
                                 };

            this.httpServer = new HttpServer(new HttpRequestProvider());
            this.httpServer.Use(new TcpListenerAdapter(new TcpListener(IPAddress.Loopback, port)));
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
            this.httpServer.Use((context, next) =>
            {
                // Thread.Sleep(2000);
                if (this.resources.ContainsKey(context.Request.Uri.ToString()))
                {
                    context.Response = new HttpResponse(HttpResponseCode.Ok, this.resources[context.Request.Uri.ToString()], false);
                }
                else
                {
                    context.Response = new HttpResponse(HttpResponseCode.NotFound, this.resources["404"], false);
                }

                return Task.Factory.GetCompleted();
            });

            this.httpServer.Start();
        }

        public void Stop()
        {
            this.httpServer.Dispose();
        }

        public void Dispose()
        {
            this.Stop();
        }
    }
}