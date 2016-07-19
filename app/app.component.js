"use strict";
var dashboard_1 = require('./dashboard/dashboard');
var routes = [
    { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent, useAsDefault: true }
];
var AppComponent = (function () {
    function AppComponent() {
        this.menuItems = [
            { caption: 'Dashboard', link: ['Dashboard'] },
            { caption: 'Characters', link: ['Dashboard'] },
            { caption: 'Vehicles', link: ['Dashboard'] }
        ];
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map