import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <section id="landing" className="">
        <aside>
          <h5>Treehouse Lookup</h5>
        </aside>
        <div className="d-inline-flex flex-row justify-content-center" id="flex-container">
          <div className="form">
            <form onSubmit={this.props.submit}>
              <input
                type="text"
                placeholder="Enter username"
                onChange={this.props.change}
                value={this.props.name}
                required
              />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="landing-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cum aliquam? Nemo est, inventore maxime
              consequatur obcaecati perferendis, animi a ullam voluptatem dolor iure reiciendis nobis similique corporis
              suscipit veritatis.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Input;
