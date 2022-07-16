const Ziggy = {"url":"http:\/\/localhost:8002","port":8002,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"profile":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile\/update","methods":["POST"]},"learning":{"uri":"learning","methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"]},"courses":{"uri":"learning\/courses","methods":["GET","HEAD"]},"programs":{"uri":"learning\/programs","methods":["GET","HEAD"]},"course":{"uri":"learning\/course\/{id}","methods":["GET","HEAD"]},"lesson":{"uri":"learning\/course\/{cid}\/lesson\/{id}","methods":["GET","HEAD"]},"check-lesson":{"uri":"learning\/course\/{cid}\/lesson\/{id}","methods":["POST"]},"success":{"uri":"learning\/course\/{id}\/success","methods":["GET","HEAD"]},"admin.index":{"uri":"admin","methods":["GET","HEAD"]},"admin.users":{"uri":"admin\/user","methods":["GET","HEAD"]},"admin.user.create":{"uri":"admin\/user\/create","methods":["GET","HEAD"]},"admin.user.edit":{"uri":"admin\/user\/{id}","methods":["GET","HEAD"]},"admin.user.update":{"uri":"admin\/user\/{id}","methods":["POST"]},"admin.user.delete":{"uri":"admin\/user\/{id}\/delete","methods":["POST"]},"admin.user.invited":{"uri":"admin\/user\/invited","methods":["GET","HEAD"]},"admin.teams":{"uri":"admin\/teams","methods":["GET","HEAD"]},"admin.team.create":{"uri":"admin\/teams\/create","methods":["GET","HEAD"]},"admin.team.edit":{"uri":"admin\/teams\/{id}","methods":["GET","HEAD"]},"admin.team.update":{"uri":"admin\/teams\/{id}","methods":["POST"]},"admin.team.delete":{"uri":"admin\/teams\/{id}\/delete","methods":["POST"]},"admin.departments":{"uri":"admin\/departments","methods":["GET","HEAD"]},"admin.department.create":{"uri":"admin\/departments\/create","methods":["GET","HEAD"]},"admin.department.edit":{"uri":"admin\/departments\/{id}","methods":["GET","HEAD"]},"admin.department.update":{"uri":"admin\/departments\/{id}","methods":["POST"]},"admin.department.delete":{"uri":"admin\/departments\/{id}\/delete","methods":["POST"]},"admin.courses":{"uri":"admin\/courses","methods":["GET","HEAD"]},"admin.course.create":{"uri":"admin\/courses\/create","methods":["GET","HEAD"]},"admin.course.edit":{"uri":"admin\/courses\/{id}","methods":["GET","HEAD"]},"admin.course.delete":{"uri":"admin\/courses\/{id}\/delete","methods":["POST"]},"admin.groups":{"uri":"admin\/groups","methods":["GET","HEAD"]},"admin.groups.create":{"uri":"admin\/groups\/create","methods":["GET","HEAD"]},"admin.groups.store":{"uri":"admin\/groups","methods":["POST"]},"admin.groups.edit":{"uri":"admin\/groups\/{courseGroup}\/edit","methods":["GET","HEAD"],"bindings":{"courseGroup":"id"}},"admin.groups.update":{"uri":"admin\/groups\/{courseGroup}","methods":["POST"],"bindings":{"courseGroup":"id"}},"admin.groups.delete":{"uri":"admin\/groups\/{courseGroup}\/delete","methods":["POST"],"bindings":{"courseGroup":"id"}},"admin.lessons":{"uri":"admin\/lessons","methods":["GET","HEAD"]},"admin.lesson.create":{"uri":"admin\/lessons\/create","methods":["GET","HEAD"]},"admin.lesson.edit":{"uri":"admin\/lessons\/{lid}","methods":["GET","HEAD"]},"admin.lesson.delete":{"uri":"admin\/lessons\/{lid}\/delete","methods":["POST"]},"admin.questions":{"uri":"admin\/lessons\/{lid}\/questions","methods":["GET","HEAD"]},"admin.question.create":{"uri":"admin\/lessons\/{lid}\/questions\/create","methods":["GET","HEAD"]},"admin.question.edit":{"uri":"admin\/lessons\/{lid}\/questions\/{qid}","methods":["GET","HEAD"]},"admin.question.delete":{"uri":"admin\/lessons\/{lid}\/questions\/{qid}\/delete","methods":["POST"]},"admin.answers":{"uri":"admin\/lessons\/{lid}\/questions\/{qid}\/answers","methods":["GET","HEAD"]},"admin.answer.create":{"uri":"admin\/lessons\/{lid}\/questions\/{qid}\/answers\/create","methods":["GET","HEAD"]},"admin.answer.edit":{"uri":"admin\/lessons\/{lid}\/questions\/{qid}\/answers\/{aid}","methods":["GET","HEAD"]},"admin.answer.delete":{"uri":"admin\/lessons\/{lid}\/questions\/{qid}\/answers\/{aid}\/delete","methods":["POST"]},"admin.curriculums":{"uri":"admin\/curriculums","methods":["GET","HEAD"]},"admin.curriculum.create":{"uri":"admin\/curriculums\/create","methods":["GET","HEAD"]},"admin.curriculum.edit":{"uri":"admin\/curriculums\/{id}","methods":["GET","HEAD"]},"admin.curriculum.delete":{"uri":"admin\/curriculums\/{id}\/delete","methods":["POST"]},"admin.teacher.lessons":{"uri":"admin\/teacher\/lessons","methods":["GET","HEAD"]},"admin.teacher.students":{"uri":"admin\/teacher\/students","methods":["GET","HEAD"]},"admin.teacher.lesson":{"uri":"admin\/teacher\/{id}","methods":["GET","HEAD"]},"getAllUsers":{"uri":"api\/users","methods":["GET","HEAD"]},"getAllTeams":{"uri":"api\/teams","methods":["GET","HEAD"]},"getAllDepartments":{"uri":"api\/departments","methods":["GET","HEAD"]},"getAllCourses":{"uri":"api\/courses","methods":["GET","HEAD"]},"getAllLessons":{"uri":"api\/lessons","methods":["GET","HEAD"]},"just-registered":{"uri":"just-registered\/{token}","methods":["GET","HEAD"]},"invite-user":{"uri":"invite-user","methods":["GET","HEAD"]},"accept-invite":{"uri":"accept-invite","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.update":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
