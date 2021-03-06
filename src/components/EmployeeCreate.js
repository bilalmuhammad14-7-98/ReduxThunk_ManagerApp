import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions/';
import {Picker} from '@react-native-picker/picker';
import {Card, CardSection, Input, Button} from './common';
import EmployeeList from './EmployeeList';
import {Text, StyleSheet} from 'react-native';
import {employeeCreate} from '../actions/';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    console.log('yess');
    console.log({name, phone, shift: shift || 'Monday'}, 'name');
    this.props.employeeCreate({name, phone, shift});
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'name', value})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'phone', value})
            }
          />
        </CardSection>

        <CardSection>
          <Text style={styles.picketTextStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({prop: 'shift', value})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Friday" value="Friday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  picketTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(
  EmployeeCreate,
);
