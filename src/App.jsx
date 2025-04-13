import './App.css'
import { cn } from "@/lib/utils";
import { PlaceholdersAndVanishInput } from './components/ui/placeholders-and-vanish-input'
import AnimatedGradientText from './components/ui/animated-gradient-text';
import { FileExtensionPicker } from './components/ui/FileExtensionPicker';
import { useState } from 'react';
import { BentoDemo } from './BentoDemo';
function App() {

  const [showExtensions, setShowExtensions] = useState(false);
  const [docID, setDocID] = useState(false);
  const [error, setError] = useState(false);

  const handleExtensionSelect = (extension) => {
    try {
      downloadDoc(extension);
    } catch (error) {
      console.error(error);
      setError('Failed to download document');
    }
    setShowExtensions(false);
  };

  const placeholders = [
    "Paste your Google Doc URL here...",
    "Enter Google Doc link to convert...",
    "https://docs.google.com/document/d/..."
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = e.target.querySelector('input').value;
    setError('');

    try {
      const url = new URL(formValue);

      if (!url.hostname.includes('docs.google.com') || !url.pathname.includes('/document/d/')) {
        throw new Error("Invalid Google Docs URL");
      }

      const pathParts = url.pathname.split('/');
      const docIndex = pathParts.indexOf('d');

      if (docIndex === -1 || docIndex + 1 >= pathParts.length) {
        throw new Error("Could not find document ID");
      }

      const docId = pathParts[docIndex + 1];

      if (!docId) {
        throw new Error("Empty document ID");
      }

      setDocID(docId);
      setShowExtensions(true);

    } catch (error) {
      console.error('Error:', error.message);
      setError("Please make sure using a valid URL and try again");
      return null;
    }
  };

  function downloadDoc(ex) {
    if (docID && ex) {
      const url = `https://docs.google.com/document/d/${docID}/export?format=${ex}`;
      window.open(url);
    }
  }



  return (
    <main className='relative'>
      <div
        className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb91_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <img src="/one-doc-drop.webp" alt="One Doc Drop logo" className='absolute top-12 left-12 w-36' />
      <div className="aspect-square w-72 h-72 bg-red-600 rounded-full blur-[200px] absolute top-0 right-[5%]"></div>
      <div className="aspect-square w-72 h-72 bg-cyan-600 rounded-full blur-[190px] absolute left-[5%]"></div>
      <div className="aspect-square w-72 h-72 bg-cyan-600 rounded-full blur-[190px] absolute right-[25%] top-[60vh]"></div>
      <div className="aspect-square w-96 h-96 bg-pink-600 rounded-full blur-[260px] absolute top-[60vh] left-[10%]"></div>
      <div className="aspect-square w-72 h-72 bg-red-600 rounded-full blur-[200px] absolute top-[80%] left-[50%]"></div>

      <section className=' w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden'><div className="max-w-4xl z-10 flex justify-center items-center flex-col gap-8">
        <div className='relative after:content-[""] after:w-full after:h-full after:absolute after:inset-0 after:z-20'> {/* Changed from p to div */}
          <AnimatedGradientText className='bg-white'>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Free • No Sign-In Required
            </span>
          </AnimatedGradientText>
        </div>
        <h1 className='text-center font-merriweather text-5xl leading-tight'>
          Convert Google Docs to Downloadable Files Instantly
        </h1>
        <p className='text-xl font-ibm text-center'>
          Effortlessly transform your Google Docs links into high-quality, shareable files in just seconds.
        </p>
        <div className='relative w-full'>
          <div
            className={`relative after:w-full after:h-full after:absolute after:inset-0 after:z-[9999] ${showExtensions ? 'after:block' : 'after:hidden'}`}
          >
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onSubmit={handleSubmit}
            />
          </div>
          {
            error && (
              <div className="error-message font-ibm text-red-500 text-center z-10 py-4">
                {error}
              </div>
            )
          }
          <div className="flex flex-col items-center">
            <span
              className={`select-none transition-all py-4 font-ibm duration-100 ${showExtensions ? '-my-0 opacity-100' : '-my-8 opacity-0'}`}
            >
              Choose extension 👇🏽
            </span>
            <FileExtensionPicker
              showOptions={showExtensions}
              onSelect={handleExtensionSelect}
            />
          </div>
        </div>

      </div>

      </section>

      <div className="relative w-2/3 mx-auto py-16 z-50 flex flex-col justify-start gap-10">
        <h2 className='text-4xl font-merriweather'>How it works</h2>
        <BentoDemo />
      </div>
    </main>
  )
}

export default App
