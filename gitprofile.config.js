//default page
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

//color variables
:root{
    --color-primary: #191d2b;
    --color-secondary: #27AE60;
    --color-white: #FFFFFF;
    --color-black: #000;
    --color-grey0: #f8f8f8;
    --color-grey-1: #dbe1e8;
    --color-grey-2: #b2becd;
    --color-grey-3: #6c7983;
    --color-grey-4: #454e56;
    --color-grey-5: #2a2e35;
    --color-grey-6: #12181b;
    --br-sm-2: 14px;
    --box-shadow-1: 0 3px 15px rgba(0,0,0,.3);
}

body{
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-primary);
    font-size: 1.1rem;
    color: var(--color-white);
    transition: .4s ease-in-out;

}

a{
    display: inline-block;
    text-decoration: none;
    color: inherit;
    font-family: inherit;
}

section{
    min-height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 3rem 18rem;
}

.section{
    transform: translateY(-100%);
    transition: all .4s ease-in-out;
    background-color: var(--color-primary);
}

.sec1{
    display: none;
    transform: translateY(0) scale(1);
}

.sec2{
    display: none;
    transform: translateY(0) scale(1);
}

.sec3{
    display: none;
    transform: translateY(0) scale(1);
}

.sec4{
    display: none;
    transform: translateY(0) scale(1);
}

.sec5{
    display: none;
    transform: translateY(0) scale(1);
}

//controls
.controls{
    position: fixed;
    z-index: 10;
    top: 50%;
    right: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    .control{
        padding: 1rem;
        cursor: pointer;
        background-color: var(--color-grey-4);
        width: 55px;
        height: 55px;
        border-radius: 50%;
    }
}
