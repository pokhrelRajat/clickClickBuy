import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <h1>Hello I am landing page</h1>
      <div>
        <a href="/login">
          <button>Login Page</button>
        </a>
        <a href="/register">
          <button>Registration Page</button>
        </a>
      </div>
    </>
  );
};

export default Home;
