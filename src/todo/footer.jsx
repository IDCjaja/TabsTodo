import '../stylesheet/footer.styl'
export default {
  data() {
    return {
      author: 'jiajia'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}