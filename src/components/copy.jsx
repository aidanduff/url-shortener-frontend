import React, { Component } from "react"

class Copy extends Component {
  copyCodeToClipboard = (props) => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }

  render(props) {
    const shortenedUrl = this.props.shortenedUrl;
    return (
      <div>
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value={shortenedUrl} 
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </button>
        </div>
      </div>
    )
  }
}

export default Copy;