const domainUri = 'http://localhost:5000';

export const Constants = {
    apiConfig: {
        "loginUri": domainUri + '/client/login/{var1}',
        "allBwicListUri": domainUri + '/bwic/list/{var1}',
        "myInvolvedBwicListUri": domainUri + '/bwic/mylist/{var1}',
        "updateBwicUri": domainUri + '/bwic/bid',
        "cancelBwicUri": domainUri + '/bwic/cancel'
    }
}
