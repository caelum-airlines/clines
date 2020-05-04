import Layout from "../../components/Layout";
import {Input, Select} from "../../components/Input";
import {DarkButton as Button} from "../../components/Button";
import {Component} from "react";
import * as promotionCodeClient from '../../lib/clients/promotionalcode';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            startDate: "",
            expirationDate: "",
            description: "",
            discount: "",
            globalErrors: [],
            codeError: [],
        }
    }

    handleChange = (name) => ({target}) => {
        const formElements = target.closest('form').elements

        const value = formElements[name].value

        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        e.persist()

        let promotionalcode = {
            code: this.state.code,
            startDate: new Date(this.state.startDate),
            expirationDate: new Date(this.state.expirationDate),
            description: this.state.description,
            discount: parseInt(this.state.discount),
        }

        const response = await promotionCodeClient.save(promotionalcode)

        if (response.ok) {
            Router.push('/promotionalcode')
            return
        }

        const json  = await response.json()
        const messages = json.errors

        const {codeErrors=[], globalErrors=[] } =  errorMapper.mapping(messages)

        this.setState({codeErrors, globalErrors})
    }

    render() {
        const {codeErrors, code, startDate, expirationDate, description, discount} = this.state

        return (

            <Layout selected="promotionalcode">
                <form className="form center" onSubmit={() => {}}>
                    <Input id="code" onChange={this.handleChange("code")} value={code} placeholder="Input promotional code here..." label="Code" errors={codeErrors}/>
                    <Input id="startDate" onChange={this.handleChange("startDate")} value={startDate} placeholder="Input start date here..." label="Start Date" errors={codeErrors}/>
                    <Input id="expirationDate" onChange={this.handleChange("expirationDate")} value={expirationDate} placeholder="Input expiration date here..." label="Expiration Date" errors={codeErrors}/>
                    <Input id="description" onChange={this.handleChange("description")} value={description} placeholder="Input description here..." label="Description" errors={codeErrors}/>
                    <Input id="discount" onChange={this.handleChange("discount")} value={discount} placeholder="Input discount here..." label="Discount" errors={codeErrors}/>
                    <Button className="btn--block no-border large center" type="submit">Save</Button>
                </form>
            </Layout>
        );

    }
}

export default AddForm