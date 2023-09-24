
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefullForm from './Components/StatefullForm/StatefullForm'

function App() {
const handleSignUpSubmit = data => {
  console.log('sing up data',data);
}
const handleProfileUpdateSubmit = data => {
  console.log('update data',data);
}
  return (
    <>
     
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
      handleSubmit={handleSignUpSubmit}
      formTitle={'Sign Up'}
      >
         <div>
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
      </div>

      </ReusableForm>
      <ReusableForm 
      submitBtnText='Update'
      handleSubmit={handleProfileUpdateSubmit}
      formTitle={'Profile Update'}>
          <div>
          <h2>Profile Update</h2>
          <p>Please update your profile</p> 
        </div>


      </ReusableForm>
    </>
  )
}

export default App
