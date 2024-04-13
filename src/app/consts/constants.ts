const domainUri = 'http://localhost:5000';

export const Constants = {
    apiConfig: {
        "registerUri": domainUri + '/user/register/',
        "loginUri": domainUri + '/user/get/{var1}',
        "login": domainUri + '/user/login',
        "logintest": domainUri + '/user/login/{var1}&{var2}',
        "allBwicListUriold": domainUri + '/bwic/list/{var1}',
        "myInvolvedBwicListUriold": domainUri + '/bwic/mylist/{var1}',
        "allBwicListUri": domainUri + '/bwic/list',
        "myInvolvedBwicListUri": domainUri + '/bwic/mylist',
        "updateBwicUri": domainUri + '/bwic/bid',
        "cancelBwicUri": domainUri + '/bwic/cancel',
        "modifyBwicUri": domainUri + '/bwic/modify',
        "deleteBwicUri": domainUri + '/bwic/delete',
        "createBwicUri": domainUri + '/bwic/create',

        "userInfo": domainUri + '/client/get/{var1}',
    }
}
