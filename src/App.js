import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar'

function App() {

  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5000/fb_posts", requestOptions)
      .then(response => response.json())
      .then(result => {
        setPosts(result.posts)
        localStorage.setItem("user", JSON.stringify(result.user))
        setUser(result.user)
      })
  }, [])

  return (
    <div className='bg-slate-100'>
      <Navbar user={user} />
      <Home user={user} posts={posts} />
    </div>
  );
}

export default App;
