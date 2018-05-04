'use babel';

import BotmasherWordCountView from './botmasher-word-count-view';
import { CompositeDisposable } from 'atom';

export default {

  botmasherWordCountView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.botmasherWordCountView = new BotmasherWordCountView(state.botmasherWordCountViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.botmasherWordCountView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'botmasher-word-count:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.botmasherWordCountView.destroy();
  },

  serialize() {
    return {
      botmasherWordCountViewState: this.botmasherWordCountView.serialize()
    };
  },

  toggle() {
    if (this.modalPanel.isVisible()) {
      this.modalPanel.hide();
    } else {
      const editor = atom.workspace.getActiveTextEditor();
      const wordCount = editor.getText().split(/\W+/).length;
      this.bnotmasherWordCountView.setCount(wordCount);
      this.modalPanel.show();
    }
  }

};
