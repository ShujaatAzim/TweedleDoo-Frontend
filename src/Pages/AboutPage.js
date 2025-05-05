const AboutPage = () => {
  return (
    <div style={{ marginLeft: "10rem", marginRight: "10rem" }}>
      <h1>About TweedleDoo</h1>
        <p>
          TweedleDoo is a loaded to-do list app, and I say "loaded" because it's not just the simple, first project that new developers make
          when learning to code for the first time! This app is meant to replace all other to-do lists by enabling multiple list creation, further
          enhancing prioritization! By breaking down things to be done into multiple lists and bite-sized pieces, the chances of getting them done and
          staving off dreaded procrastination are greatly enhanced!
        </p>
        <p>
          TweedleDoo is built in React, with a Ruby on Rails backend. I made this into a fully functional, full stack app with authorization. Upon user 
          creation, one is able to log in and view all their lists, while adding and removing/completing items. Everything is safely persisted on the 
          backend. I also used Semantic UI React library for the styled components. For global state, I used RecoilJS, a brand new  way to access global 
          state without the crazy boilerplate code of Redux. 
        </p>
        <p>
          While the core functionality and design are complete, I will be tinkering with the stlying and will implement any new, modern technology to this 
          project as it comes out. The simple to-do list is a great way to learn about cutting-edge changes, and "loaded" to-do list should be even better!
        </p>
        <p>
          Thank you for trying it out! Feel free to contact me if you have any questions or suggestions! Constructive feedback is always welcome :)
        </p>
        <p>
          Shujaat Azim
        </p>
    </div>
  );
}

export default AboutPage;