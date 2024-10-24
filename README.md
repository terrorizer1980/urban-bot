![](files/banner.jpg)

[![npm](https://badge.fury.io/js/%40urban-bot%2Fcore.svg)](https://badge.fury.io/js/%40urban-bot%2Fcore)
![Build](https://github.com/urban-bot/urban-bot/workflows/Node.js%20CI/badge.svg)
[![Community Chat](https://img.shields.io/badge/Community-Chat-blueChat?style=flat-square&logo=telegram)](https://t.me/urbanbotjs)

# Urban Bot

The universal chatbot library based on [React](https://github.com/facebook/react).

* **Declarative.** You don't need to know any messenger API, just write simple react components.
* **Multiplatform.** Write once, launch any messenger.
* **Reusable.** Easy share logic between different chatbots or just use common parts.
* **Session.** App renders unique for every chat, so just write your app as if it is client-side rendering.
* **Types.** Full typescript support.

**Platforms we are supporting**

[![](files/telegram-logo.svg)](https://telegram.org/)
 [![](files/slack-logo.svg)](https://slack.com/)
 [![](files/facebook-logo.svg)](https://www.messenger.com/)
 
 
**Soon**

[![](files/discord-logo.svg)](https://www.discord.com/)
 [![](files/whatsapp-logo.svg)](https://www.whatsapp.com/)
 [![](files/vk-logo.svg)](https://www.vk.com/)
 [![](files/viber-logo.svg)](https://www.viber.com/)

## [Get Started](https://urban-bot.now.sh/docs/intro.html)
## [API](https://urban-bot.now.sh/docs/components.html)
## Tutorials
* [How to create Todo List in Telegram](https://medium.com/@heresliker/how-to-create-todo-list-telegram-bot-with-react-js-f9f77d22cc49)
* [Как создать Todo List в Telegram](https://medium.com/@heresliker/%D0%BA%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-todo-list-%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82%D0%B0-%D0%B2-telegram-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-react-js-d8a3c238ca91)

## Installation
Please use our zero configuration [starter](https://github.com/urban-bot/urban-bot-starter-typescript).
#### typescript
```
npx create-urban-bot my-app
```
#### javascript
```
npx create-urban-bot my-app --template js
```

Or install manually:
```bash
npm i react @urban-bot/core @urban-bot/telegram @urban-bot/facebook ...
```

## Example
![](files/telegram-gif.gif)
![](files/slack-gif.gif)
```javascript
import React from 'react';
import { render, Route, Router, Root, Text, ButtonGroup, Button, useText } from '@urban-bot/core';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { UrbanBotSlack } from '@urban-bot/slack';

function Echo() {
    const [text, setText] = React.useState('Say something');

    useText(({ text }) => {
        setText(text);
    });

    return (
        <Text>
            <i>{text}</i>
        </Text>
    );
}

function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <ButtonGroup title={count} isNewMessageEveryRender={false}>
            <Button onClick={increment}>+1</Button>
            <Button onClick={decrement}>-1</Button>
        </ButtonGroup>
    );
}

function App() {
    return (
        <Router>
            <Route path="/echo">
                <Echo />
            </Route>
            <Route path="/counter">
                <Counter />
            </Route>
        </Router>
    );
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: 'telegramToken',
});

const urbanBotSlack = new UrbanBotSlack({
    signingSecret: 'slackSigningSecret',
    token: 'slackToken',
});

render(
    <Root bot={urbanBotTelegram}>
        <App />
    </Root>
);

render(
    <Root bot={urbanBotSlack}>
        <App />
    </Root>
);
```
