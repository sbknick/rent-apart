import React, { Component } from 'react';

import { Loop, Stage } from 'react-game-kit'

export default class Presentation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameState: 0,
            slideIndex: 0,
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    render() {
        this.gameStates = [

        ];
        return this.gameStates[this.state.gameState];
    }

    handleStart() {
      this.setState({
        gameState: 0,
      });
    };
  
    handleDone() {
      this.setState({
        gameState: 1,
      });
    };
  
    handleLeave(index) {
      this.setState({
        gameState: 2,
        slideIndex: index,
      });
    };
}