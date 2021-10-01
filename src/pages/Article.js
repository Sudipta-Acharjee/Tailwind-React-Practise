import React from 'react';
import Articles from '../Components/Articles';
import articleContent from './article-content';
import Notfound from './Notfound';


const Article = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);
    if (!article) return <Notfound />;
    const otherArticle = articleContent.filter((article) => article.name !== name);

    return (
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-boldmt-6 text-gray-900">{article.title}</h1>
            {article.content.map((paragraph, index) => (
                <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
            ))}
            <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray">Other Articles</h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticle} />
            </div>
        </div>
    )
}

export default Article
