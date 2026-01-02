"use client"

export default function Home() {
  return <div className="flex flex-col h-screen justify-between">

    <header className="bg-white p-2">
      <div className="flex lg:flex-1 items-center justify-center">
        <a href="#" className="m-1.5">
          <span className="sr-only">Text-to-SQL Agent</span>
          <img
            className="h-8 w-auto"
            src="http://localhost:3000/watsonx.svg"
            alt=""
          />
        </a>
        <h1 className="text-black font-bold">Text-to-SQL Agent</h1>
      </div>
    </header>
  </div>
}