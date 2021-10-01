import React from 'react'
import article from './articleContent';

const ArticleList = () => {
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">Article List</h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap m-4">
                    {article.map((article, index) => (<div key={index} className="p-4 md:w-1/2">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"></div>
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default ArticleList
