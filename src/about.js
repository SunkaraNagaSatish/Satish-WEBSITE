import { Link, Outlet } from 'react-router-dom';

export function Profile() {
  return (
    <div>
      <h1>This is my profile</h1>
    </div>
  );
}

export function Settings() {
  return (
    <div><h1>This is settings</h1></div>
  );
}

const About = () => {
  return (
    <>
      <div><h1>This is the about component</h1></div>
      <button type="button" class="btn btn-light"><Link to="profile">Profile</Link></button>
      <button type="button" class="btn btn-light"><Link to='settings'>settings</Link></button>
      <Outlet /> {/* This is important for rendering nested routes like "profile" */}
    </>
  );
}

export default About;
