/**
 * User: puti.
 * Time: 2018/2/7 下午8:22.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {pageHelper} from "../utils/index";
import {inject, observer} from 'mobx-react'
import {autorun} from 'mobx'
@inject('userStore')
@pageHelper
@observer
export default class LoginPage extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'LoginPage',
    });

    constructor(props) {
        super(props);
        autorun(() => {
            if (this.props.userStore.isLogin) {

                this.props.navigation.goBack()
            }
        })
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentWillFocus(e) {
        console.log('componentWillFocus', e)
    }

    componentDidFocus = (e) => {
        console.log('componentDidFocus', e)
    };

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillBlur(e) {
        console.log('componentWillBlur', e)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidBlur(e) {
        console.log('componentDidBlur', e)
    }

    _login = () => {
        this.props.userStore.login('157xxxxxxxx', '111111', this.store)
    };

    render() {
        console.log('render', this);
        return (
            <View style={styles.container}>
                <Text>登录页面</Text>
                <Button onPress={this._login} title={'登录'}/>

                <Button onPress={() => {
                    this.props.navigation.pop()
                }} title={'返回上一页'}/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
