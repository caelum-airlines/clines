import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Table from "../../components/Table";
import * as rest from '../../lib/clients/promotionalcode';
import Router from "next/router";

import { mockPromotionalCodes } from "../../stubs/promotional-code";

const headers = [
  "code",
  "startDate",
  "expirationDate",
  "description",
  "discount"
]

const PromotionalCodes = ({ promotionalCodes = [] }) => (
  <Layout selected="promotional-codes">
    <div className="row">
      <h1>Promotional Code</h1>
      <Button className="medium" onClick={() => { }}>Add new Promotional Code</Button>
    </div>
    <Table headers={headers} rows={promotionalCodes} rowOnClick={() => { }} />
  </Layout>
);


PromotionalCodes.getInitialProps = async () => {
  // const promotionalCodes = await rest.list();
  const promotionalCodes = mockPromotionalCodes;

  return { promotionalCodes: promotionalCodes.map(flatCodes) }
}

const flatCodes = (props) => {

  return [
    props.code,
    props.startDate,
    props.expirationDate,
    props.description,
    props.discount,
  ]
};

export default PromotionalCodes;

