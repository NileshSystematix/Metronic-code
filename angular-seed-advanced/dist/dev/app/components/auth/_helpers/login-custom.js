"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginCustom = (function () {
    function LoginCustom() {
    }
    LoginCustom.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(this).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    }
                }
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.displaySignUpForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');
        login.addClass('m-login--signup');
        login.find('.m-login__signup').animateClass('flipInX animated');
    };
    LoginCustom.displaySignInForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };
    LoginCustom.displayForgetPasswordForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');
        login.addClass('m-login--forget-password');
        login.find('.m-login__forget-password').animateClass('flipInX animated');
    };
    LoginCustom.handleFormSwitch = function () {
        $('#m_login_forget_password').click(function (e) {
            e.preventDefault();
            LoginCustom.displayForgetPasswordForm();
        });
        $('#m_login_forget_password_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
        $('#m_login_signup').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignUpForm();
        });
        $('#m_login_signup_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
    };
    LoginCustom.handleSignUpFormSubmit = function () {
        $('#m_login_signup_submit').click(function (e) {
            var btn = $(this);
            var form = $(this).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                    rpassword: {
                        required: true
                    },
                    agree: {
                        required: true
                    }
                }
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.handleForgetPasswordFormSubmit = function () {
        $('#m_login_forget_password_submit').click(function (e) {
            var btn = $(this);
            var form = $(this).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                }
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.init = function () {
        LoginCustom.handleFormSwitch();
        LoginCustom.handleSignInFormSubmit();
        LoginCustom.handleSignUpFormSubmit();
        LoginCustom.handleForgetPasswordFormSubmit();
    };
    return LoginCustom;
}());
exports.LoginCustom = LoginCustom;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvX2hlbHBlcnMvbG9naW4tY3VzdG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQW9JQSxDQUFDO0lBbElPLGtDQUFzQixHQUE3QjtRQUNDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNiLEtBQUssRUFBRTtvQkFDTixLQUFLLEVBQUU7d0JBQ04sUUFBUSxFQUFFLElBQUk7d0JBQ2QsS0FBSyxFQUFFLElBQUk7cUJBQ1g7b0JBQ0QsUUFBUSxFQUFFO3dCQUNULFFBQVEsRUFBRSxJQUFJO3FCQUNkO2lCQUNEO2FBQ0QsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQztZQUNSLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSw2QkFBaUIsR0FBeEI7UUFDQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVyQyxLQUFLLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSw2QkFBaUIsR0FBeEI7UUFDQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMs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QUNuQixNQUFNLENBQUM7WUFDUixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sMENBQThCLEdBQXJDO1FBQ0MsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNyRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNiLEtBQUssRUFBRTtvQkFDTixLQUFLLEVBQUU7d0JBQ04sUUFBUSxFQUFFLElBQUk7d0JBQ2QsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7YUFDRCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxDQUFDO1lBQ1IsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLGdCQUFJLEdBQVg7UUFDQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQixXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNyQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNyQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQXBJQSxBQW9JQyxJQUFBO0FBcElZLGtDQUFXIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2F1dGgvX2hlbHBlcnMvbG9naW4tY3VzdG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZ2luQ3VzdG9tIHtcclxuXHJcblx0c3RhdGljIGhhbmRsZVNpZ25JbkZvcm1TdWJtaXQoKSB7XHJcblx0XHQkKCcjbV9sb2dpbl9zaWduaW5fc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0bGV0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuXHRcdFx0Zm9ybS52YWxpZGF0ZSh7XHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRlbWFpbDogdHJ1ZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKCFmb3JtLnZhbGlkKCkpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkaXNwbGF5U2lnblVwRm9ybSgpIHtcclxuXHRcdGxldCBsb2dpbiA9ICQoJyNtX2xvZ2luJyk7XHJcblx0XHRsb2dpbi5yZW1vdmVDbGFzcygnbS1sb2dpbi0tZm9yZ2V0LXBhc3N3b3JkJyk7XHJcblx0XHRsb2dpbi5yZW1vdmVDbGFzcygnbS1sb2dpbi0tc2lnbmluJyk7XHJcblxyXG5cdFx0bG9naW4uYWRkQ2xhc3MoJ20tbG9naW4tLXNpZ251cCcpO1xyXG5cdFx0KDxhbnk+bG9naW4uZmluZCgnLm0tbG9naW5fX3NpZ251cCcpKS5hbmltYXRlQ2xhc3MoJ2ZsaXBJblggYW5pbWF0ZWQnKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkaXNwbGF5U2lnbkluRm9ybSgpIHtcclxuXHRcdGxldCBsb2dpbiA9ICQoJyNtX2xvZ2luJyk7XHJcblx0XHRsb2dpbi5yZW1vdmVDbGFzcygnbS1sb2dpbi0tZm9yZ2V0LXBhc3N3b3JkJyk7XHJcblx0XHRsb2dpbi5yZW1vdmVDbGFzcygnbS1sb2dpbi0tc2lnbnVwJyk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHQkKCdmb3JtJykuZGF0YSgndmFsaWRhdG9yJykucmVzZXRGb3JtKCk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHR9XHJcblxyXG5cdFx0bG9naW4uYWRkQ2xhc3MoJ20tbG9naW4tLXNpZ25pbicpO1xyXG5cdFx0KDxhbnk+bG9naW4uZmluZCgnLm0tbG9naW5fX3NpZ25pbicpKS5hbmltYXRlQ2xhc3MoJ2ZsaXBJblggYW5pbWF0ZWQnKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkaXNwbGF5Rm9yZ2V0UGFzc3dvcmRGb3JtKCkge1xyXG5cdFx0bGV0IGxvZ2luID0gJCgnI21fbG9naW4nKTtcclxuXHRcdGxvZ2luLnJlbW92ZUNsYXNzKCdtLWxvZ2luLS1zaWduaW4nKTtcclxuXHRcdGxvZ2luLnJlbW92ZUNsYXNzKCdtLWxvZ2luLS1zaWdudXAnKTtcclxuXHJcblx0XHRsb2dpbi5hZGRDbGFzcygnbS1sb2dpbi0tZm9yZ2V0LXBhc3N3b3JkJyk7XHJcblx0XHQoPGFueT5sb2dpbi5maW5kKCcubS1sb2dpbl9fZm9yZ2V0LXBhc3N3b3JkJykpLmFuaW1hdGVDbGFzcygnZmxpcEluWCBhbmltYXRlZCcpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGhhbmRsZUZvcm1Td2l0Y2goKSB7XHJcblx0XHQkKCcjbV9sb2dpbl9mb3JnZXRfcGFzc3dvcmQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdExvZ2luQ3VzdG9tLmRpc3BsYXlGb3JnZXRQYXNzd29yZEZvcm0oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJyNtX2xvZ2luX2ZvcmdldF9wYXNzd29yZF9jYW5jZWwnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdExvZ2luQ3VzdG9tLmRpc3BsYXlTaWduSW5Gb3JtKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcjbV9sb2dpbl9zaWdudXAnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdExvZ2luQ3VzdG9tLmRpc3BsYXlTaWduVXBGb3JtKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcjbV9sb2dpbl9zaWdudXBfY2FuY2VsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRMb2dpbkN1c3RvbS5kaXNwbGF5U2lnbkluRm9ybSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaGFuZGxlU2lnblVwRm9ybVN1Ym1pdCgpIHtcclxuXHRcdCQoJyNtX2xvZ2luX3NpZ251cF9zdWJtaXQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRsZXQgYnRuID0gJCh0aGlzKTtcclxuXHRcdFx0bGV0IGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKTtcclxuXHRcdFx0Zm9ybS52YWxpZGF0ZSh7XHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdGZ1bGxuYW1lOiB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdGVtYWlsOiB0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRycGFzc3dvcmQ6IHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRhZ3JlZToge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGlmICghZm9ybS52YWxpZCgpKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaGFuZGxlRm9yZ2V0UGFzc3dvcmRGb3JtU3VibWl0KCkge1xyXG5cdFx0JCgnI21fbG9naW5fZm9yZ2V0X3Bhc3N3b3JkX3N1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGxldCBidG4gPSAkKHRoaXMpO1xyXG5cdFx0XHRsZXQgZm9ybSA9ICQodGhpcykuY2xvc2VzdCgnZm9ybScpO1xyXG5cdFx0XHRmb3JtLnZhbGlkYXRlKHtcclxuXHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdGVtYWlsOiB0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKCFmb3JtLnZhbGlkKCkpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpbml0KCkge1xyXG5cdFx0TG9naW5DdXN0b20uaGFuZGxlRm9ybVN3aXRjaCgpO1xyXG5cdFx0TG9naW5DdXN0b20uaGFuZGxlU2lnbkluRm9ybVN1Ym1pdCgpO1xyXG5cdFx0TG9naW5DdXN0b20uaGFuZGxlU2lnblVwRm9ybVN1Ym1pdCgpO1xyXG5cdFx0TG9naW5DdXN0b20uaGFuZGxlRm9yZ2V0UGFzc3dvcmRGb3JtU3VibWl0KCk7XHJcblx0fVxyXG59Il19
