import React from 'react'

const Article = ({ match }) => {
    const name = match.params.name
    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-boldmt-6 text-gray-900">This is the {name} of Article</h1>
            <p className="mx-auto leading-relaxed text-base mb-4">Lorem Inpsum dolor sit amet, consectetur adipiscing elit</p>
            <p className="mx-auto leading-relaxed text-base mb-4">Lorem Inpsum dolor sit amet, consectetur adipiscing elit</p>
            <p className="mx-auto leading-relaxed text-base mb-4">Lorem Inpsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    )
}

export default Article
