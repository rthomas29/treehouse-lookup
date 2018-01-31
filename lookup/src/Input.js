import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <section>
        <header className="text-center">
          <h1 className="">Treehouse Lookup</h1>
        </header>
        <div className="d-flex flex-row justify-content-around align-items-center" id="">
          <div className="form text-center">
            <form onSubmit={this.props.submit}>
              <input
                type="text"
                placeholder="Find your profile"
                onChange={this.props.change}
                value={this.props.name}
                required
                autoFocus
              />
              <input className="btn btn-primary" type="submit" value="Search" />
            </form>
          </div>
          <div className="landing-text">
            <aside className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cum aliquam? Nemo est, inventore maxime
              consequatur obcaecati perferendis, animi a ullam voluptatem.
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default Input;
