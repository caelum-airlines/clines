import React from 'react'
import { mount, shallow } from 'enzyme'
import Table from "./Table.component"

const props = {
  headers: [
    "code",
    "startDate",
    "expirationDate",
    "description",
    "discount"
  ],
  rows: [
    [
      "B2CC71",
      "02-02-2020",
      "03-03-2020",
      "Utilize este código promocional para ganhar 10% de desconto",
      10],
    [
      "AABB90",
      "10-04-2020",
      "15-05-2020",
      "Utilize este código promocional para ganhar 20% de desconto",
      20]
  ]
};

describe('Table', () => {
  it('should render a table', () => {
    const wrapper = mount(<Table {...props}></Table>);
    expect(wrapper.find('Table').exists()).toEqual(true);
  });

  it('should render headers correctly', () => {
    const wrapper = mount(<Table {...props}></Table>);

    expect(wrapper.find('Table').text()).toContain(['code']);
    expect(wrapper.find('Table').text()).toContain(['startDate']);
    expect(wrapper.find('Table').text()).toContain(['expirationDate']);
    expect(wrapper.find('Table').text()).toContain(['description']);
    expect(wrapper.find('Table').text()).toContain(['discount']);
  });

  it('should render table rows with correct information', () => {
    const wrapper = mount(<Table {...props}></Table>);

    expect(wrapper.find('Table').text()).toContain('B2CC71');
    expect(wrapper.find('Table').text()).toContain('10% de desconto');

    expect(wrapper.find('Table').text()).toContain('AABB90');
    expect(wrapper.find('Table').text()).toContain('20% de desconto');
  });
})