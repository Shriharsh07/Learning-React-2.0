import React, { useEffect, useState } from 'react'

export function Card() {

    const [quoteContent, setQuoteContent] = useState("Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.");

    const [author, setAuthor] = useState("Benjamin Haydon");

    async function randomQuote() {
        const response = await fetch('https://api.quotable.io/random')
        const quote = await response.json()
        console.log(quote.content)
        console.log(`- ${quote.author}`)
        setQuoteContent(quote.content);
        setAuthor(quote.author);
    }

    return (
        <div className="w-[420px] rounded-md">
            <div className="p-4">
                <h1 className="text-lg font-semibold">"{quoteContent}"</h1>
                <p className="mt-3 text-sm text-gray-600">
                    - {author}
                </p>
                <button
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={randomQuote}
                >
                    New Qoute
                </button>
            </div>
        </div>
    )
}
