const testData = [
    'https://imgs.xkcd.com/comics/easy_or_hard.png',
    'https://imgs.xkcd.com/comics/archimedes_principle.png',
    'https://imgs.xkcd.com/comics/movie_ages.png',
]

export const ContentPlayer = () => {
    return <div className='content-player-container'>
        <img className='content-image' src={testData[2]}></img>
    </div>
}