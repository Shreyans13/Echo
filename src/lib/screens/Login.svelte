<script lang="ts" context="module">
</script>

<script lang="ts">
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "../../services/firebase";
  import { navigate } from "svelte-routing/src/history";
  import { onMount } from "svelte";
  let email: string = "hakocad360@nasskar.com";
  let password: string = "hakocad360@nasskar.com";
  let errorMessage: string = "";
  let errorCode;

  const signInUser = (event: Event): void => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/", { replace: true, state: {} });
      })
      .catch((error) => {
        errorCode = error.code;
        errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
  const registerUser = (event: Event): void => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        errorCode = error.code;
        errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
</script>

<div class="login">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    class="login__logo"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    alt="logo"
    on:click={() => navigate("/")}
  />
  <div class="login__container">
    <h1>Sign In</h1>
    <form action="">
      <h5>Email</h5>
      <input type="text" bind:value={email} />

      <h5>Password</h5>
      <input type="password" bind:value={password} />

      <button type="submit" on:click={signInUser} class="login__signInButton"
        >Sign In</button
      >
    </form>
    <p>{errorMessage}</p>
    <p>Agree Fake terms and conditions</p>
    <button on:click={registerUser} class="login__registerButton"
      >Create your account</button
    >
  </div>
</div>

<style>
  .login {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login__logo {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  .login__container {
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
  }
  .login__container > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  .login__container > form > h5 {
    margin-bottom: 5px;
    margin-top: 0px;
  }
  .login__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }
  .login__container > p {
    margin-top: 15px;
    font-size: 12px;
  }
  .login__signInButton {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    border-color: #a88734 #9c73e1 #846a29;
    color: #111;
  }
  .login__registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
</style>
