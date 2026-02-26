import { BrowserRouter } from 'react-router-dom';

export default function AppComponent() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col bg-gray-50">
        <header className="flex items-center justify-center py-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">fit2fly</h1>
        </header>
        <div className="flex-1 flex items-center justify-center p-6">
          <p className="text-gray-600">App content</p>
        </div>
      </main>
    </BrowserRouter>
  );
}
