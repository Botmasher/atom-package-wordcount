'use babel';

export default class BotmasherWordCountView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('botmasher-word-count');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The BotmasherWordCount package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  setCount(count) {
    const displayText = count ? `Buffer has ${count} words.` : `(Buffer/editor not loaded.)`;
    this.element.children[0].textContent = displayText;
  }

}
