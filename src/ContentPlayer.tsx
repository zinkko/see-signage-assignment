import React from "react";

const testData = [
    'https://imgs.xkcd.com/comics/easy_or_hard.png',
    'https://imgs.xkcd.com/comics/archimedes_principle.png',
    'https://imgs.xkcd.com/comics/movie_ages.png',
]

const INTERVAL = 7000;
interface ContentPlayerState {
    playlist: string[];
    index: number;
}

export class ContentPlayer extends React.Component<{}, ContentPlayerState> {
    private timerId?: NodeJS.Timer = undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            playlist: [...testData],
            index: 0,
        }
    }

    nextIndex() {
        const newIndex = (this.state.index + 1) % this.state.playlist.length;
        this.setState({
            index: newIndex,
        })
    }
    
    componentDidMount(): void {
        this.timerId = setInterval(this.nextIndex.bind(this), INTERVAL);
    }
    
    componentWillUnmount(): void {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    render () {
        const source = this.state.playlist[this.state.index];
        return <div className='content-player-container'>
            <img className='content-image' src={source}></img>
        </div>
    }
}