import {Form, Button, FormGroup, Input} from 'reactstrap'
import '../styles/Pricing.css'

function Pricing() {
    return(   
        <div className='formDiv'> 
        <div className='rightBody'>
            <h2>GET A QUOTE</h2>
            <p>
                Do you have a business? Need content for your business or non-profit? 
                Whatever your video needs may be, I would love to chat and give you an accurate quote.
                Fill out your information below and I will be in touch!
            </p>
            <Form  className='form'>
                <FormGroup>
                    <label className='formLabel'>*Name</label><br/>
                    <Input type='text'/>
                </FormGroup>
                <FormGroup>
                    <label className='formLabel'>*Email</label><br/>
                    <Input type='email'/>
                </FormGroup>
                <FormGroup>
                    <label className='formLabel'>Phone</label><br/>
                    <Input type='text' />
                </FormGroup>
                <FormGroup>
                    <label className='formLabel'>*Short Description</label><br/>
                    <Input type='textarea' className='formInput' style={{paddingBottom:'0px'}}/>
                    <i>*Required Fields</i>
                </FormGroup>

                    <Button>Submit</Button>
            </Form>
            
        </div>
        {/* <CaroselComp/> */}
        </div>
    )
}

export default Pricing