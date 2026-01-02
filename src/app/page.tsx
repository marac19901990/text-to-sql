"use client"

export default function Home() {
  return <div className="flex flex-col h-screen justify-between">

    <header className="bg-white p-2">
      <div className="flex lg:flex-1 items-center justify-center">
        <a href="#" className="m-1.5">
          <span className="sr-only">Text-to-SQL Agent</span>
        </a>
        <h1 className="text-black font-bold">Text-to-SQL Agent</h1>
      </div>
    </header>

    <div className="flex flex-col h-full">
      <div
        className="col-start-1 col-end-8 p-3 rounded-lg"
      >
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-400 text-white flex-shrink-0 text-sm">
            Me
          </div>
          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>Human message</div>
          </div>
        </div>
      </div>
      <div
        className="col-start-6 col-end-13 p-3 rounded-lg"
      >
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-400 flex-shrink-0 text-sm">
            AI
          </div>
          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
            <div>AI response</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-auto justify-between bg-gray-100 p-6">
      <div className="top-[100vh] flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <input
              type="text"
              disabled
              value=""
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </div>
        </div>
        <div className="ml-4">
          <button
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-2 flex-shrink-0"
          >
          </button>
        </div>
      </div>
    </div>
  </div>
}