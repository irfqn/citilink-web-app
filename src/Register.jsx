import { Button } from './components/ui/button'
import { CardDescription, CardTitle } from './components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from './components/ui/label'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const navigate=useNavigate()

  return (
    <main>
      <div className="register-left">
        <img src="../changi.jpeg" alt="" />
      </div>
      <div className="register-right">
        <img src="../citilink-logo.png" alt="" className='register-logo'/>
        <div className="register-form">
          <div>
            <CardTitle>Regist yourself here!</CardTitle>
            <CardDescription className="mt-1">fill the form to see other courses</CardDescription>
          </div>
          <div className="form">
            <Label>Username</Label>
            <Input id="register-email" type="text" placeholder="Your username"/>
          </div>
          <div className="form">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="form">
            <Label>Birth date</Label>
            <Input type="date" placeholder="Email" />
          </div>
          <Button className="register-button bg-green" onClick={()=>navigate('/courses')}>Regist!</Button>
        </div>
      </div>
    </main>
  )
}

export default Register
