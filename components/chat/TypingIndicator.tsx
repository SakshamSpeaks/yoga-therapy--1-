"use client"

export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-md">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div 
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div 
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
