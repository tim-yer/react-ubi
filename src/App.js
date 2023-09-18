import {useState} from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'
import postItem from "./components/PostItem";
import PostList from "./components/PostList";
import OwnButton from "./components/UI/button/OwnButton";
import OwnInput from "./components/UI/input/OwnInput";


function App() {
    // const [likes, setLikes] = useState(0);
    // const [inputValue, setInputValue] = useState()
    //
    // const decr = () => {
    //     setLikes((prevState)=> {
    //          return prevState - 1;
    //     })
    // }
    //
    // const incr = () => {
    //     setLikes((prevState)=> {
    //         return prevState + 1;
    //     })
    // }
    //
    // const onChangeHandler = (e) => {
    //     setInputValue(e.target.value);
    // }

    const [posts, setPosts] = useState ([
        {id: 1, name: 'Javascript', description: 'description 1'},
        {id: 2, name: 'Java', description: 'description 2'},
        {id: 3, name: 'PhP', description: 'description 3'},
        {id: 4, name: 'Python', description: 'description 4'},
        {id: 5, name: 'Swift', description: 'description 5'},
        {id: 6, name: 'C#', description: 'description 6'},
    ])

    posts.push({id: 7, name: 'Delphi', description: 'description 7'})
    console.log('posts', posts)
  return (
    <div className="app">
        <OwnInput type="text" placeholder="Введите имя"/>
        <OwnInput type="text" placeholder="Введите описание"/>
        <OwnButton disabled >Добавить пост</OwnButton>
            <PostList posts={posts}/>
    </div>
  );
}

export default App;
