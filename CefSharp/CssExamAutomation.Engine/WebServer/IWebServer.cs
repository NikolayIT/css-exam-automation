namespace CssExamAutomation.Engine.WebServer
{
    public interface IWebServer
    {
        void RegisterResource(string path, byte[] contentBytes);

        void Run();

        void Stop();
    }
}
