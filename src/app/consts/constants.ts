const domainUri = 'http://localhost:5000';

export const Constants = {
    apiConfig: {
        "registerUri": domainUri + '/user/register/',
        "loginUri": domainUri + '/user/get/{var1}',
        "login": domainUri + '/user/login',
        "logintest": domainUri + '/user/login/{var1}&{var2}',
        "allBwicListUri": domainUri + '/bwic/list/{var1}',
        "myInvolvedBwicListUri": domainUri + '/bwic/mylist/{var1}',
        "updateBwicUri": domainUri + '/bwic/bid',
        "cancelBwicUri": domainUri + '/bwic/cancel',
        "modifyBwicUri": domainUri + '/bwic/modify',
        "deleteBwicUri": domainUri + '/bwic/delete',
        "createBwicUri": domainUri + '/bwic/create',
    }
}
