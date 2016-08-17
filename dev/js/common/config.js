/**
 * Created by allanXu on 08/17/2016.
 */

define(function () {
    var server_host = 'http://115.239.229.12:8020/';
    return {
        server_host: server_host,
        SERVICE: {
            POLICY: {

            },
            EDU: {
                LIST: server_host + 'educationStudy/findPage',
                DETAILS: server_host + 'educationStudy/load',
                STORE: server_host + 'educationStudyCollect/save',
                UNSTORE: server_host + 'educationStudyCollect/delete',
                SHARE: server_host + 'educationStudyShare/save',
                PRAISE: server_host + 'educationStudy/praise'
            },
            NEWS: {
                LIST: server_host + 'news/findPage'
                // LIST: server_host + 'educationStudy/findPage'
            },
            LABOURDIR: {
                LIST: server_host + 'labourEmploy/findPage',
                DETAILS: server_host + 'labourEmploy/load',
                STORE: server_host + 'labourEmployCollect/save',
                UNSTORE: server_host + 'labourEmployCollect/delete',
                SHARE: server_host + 'labourEmployShare/save',
                PRAISE: server_host + 'labourEmploy/praise',
                // 就业申请
                JOBAPPLY: server_host + 'employApply/save',

            },



        }
    }
});
