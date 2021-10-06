export default {
  namespaced: true,
  state: {
    pages: {
      en: {
        login: {
          title: 'Hello!',
          text: 'We have created this place so that you can develop, feel as comfortable as possible in the circle of nice people. This is a community of professionals united by one idea - with the help of code, magic will become a reality!',
          btn: {
            link: 'Registration',
            text: 'Registration'
          }
        },
        registration: {
          title: 'Quick registration',
          text: 'To take full advantage of the service: you need to register. It won\'t take more than 1 minute!',
          descr: 'If you are registered, just sign in to your account',
          btn: {
            link: 'Login',
            text: 'I already have an account',
            variant: 'dark'
          }
        },
        'registration-success': {
          title: 'Are you registered!',
          text: 'Your account has been successfully created. To activate it, you need to log in using the data provided during registration.',
          btn: {
            link: 'Login',
            text: 'Log in'
          }
        },
        forgot: {
          title: 'Password recovery',
          text: 'To recover your password, enter the e-mail to which your page is linked. We will send a link to reset your password there.',
          btn: {
            link: 'Login',
            text: 'Back to login',
            variant: 'dark'
          }
        },
        'forgot-success': {
          title: 'A link to reset your password has been sent to your e-mail',
          text: 'Within 5 minutes, a letter with a link will be sent to the mail you specified. Follow it to recover your password.',
          btn: {
            link: '',
            text: 'Go to e-mail'
          }
        },
        'change-password': {
          title: 'Change password',
          text: 'Your old password has been reset. Come up with a new password to enter the site.'
        },
        'change-password-success': {
          title: 'Password changed successfully!',
          text: 'The password has been successfully changed. Use this password for subsequent authorization processes.',
          btn: {
            link: 'Login',
            text: 'Log in'
          }
        },
        'shift-password': {
          title: 'Change password',
          text: 'Come up with a new password, later you can change it',
        },
        'shift-email': {
          title: 'Change e-mail',
          text: 'Enter a new e-mail',
        },
        'shift-email-success': {
          title: 'A confirmation email has been sent to your new e-mail',
          text: 'Within 5 minutes, a letter with a link will be sent to the mail you specified. Follow it to confirm your e-mail.',
          btn: {
            link: '',
            text: 'Go to e-mail'
          }
        }
      },
      ru: {
        login: {
          title: 'Привет!',
          text: 'Мы создали это место, чтобы вы смогли развиваться, чувствую себя максимально комфортно в кругу приятных людей. Это сообщество профессионалов, объединённых одной идеей — с помощью кода, магия станет реальностью!',
          btn: {
            link: 'Registration',
            text: 'Регистрация'
          }
        },
        registration: {
          title: 'Быстрая регистрация',
          text: 'Чтобы воспользоваться всеми возможностями сервиса: вам необходимо зарегистрироваться. Это не займёт больше 1 минуты!',
          descr: 'Если вы зарегистрированы, просто войдите в аккаунт',
          btn: {
            link: 'Login',
            text: 'У меня уже есть аккаунт',
            variant: 'dark'
          }
        },
        'registration-success': {
          title: 'Вы зарегистрированы!',
          text: 'Ваш аккаунт успешно создан. Чтобы активировать его, вам необходимо войти в систему, использую данные, указанные при регистрации.',
          btn: {
            link: 'Login',
            text: 'Войти'
          }
        },
        forgot: {
          title: 'Восстановление пароля',
          text: 'Чтобы восстановить пароль, укажите e-mail, к которому привязана ваша страница. Мы отправим ссылку для восстановаления пароля туда.',
          btn: {
            link: 'Login',
            text: 'Вернуться к авторизации',
            variant: 'dark'
          }
        },
        'forgot-success': {
          title: 'На ваш e-mail отправлена ссылка для восстановления пароля',
          text: 'В течение 5 минут, на указанную вами почту, придёт письмо со ссылкой. Перейдите по ней, чтобы восстановить пароль.',
          btn: {
            link: '',
            text: 'Перейти в почту'
          }
        },
        'change-password': {
          title: 'Смена пароля',
          text: 'Ваш старый пароль был сброшен. Придумайте новый пароль для входа на сайт.'
        },
        'change-password-success': {
          title: 'Пароль успешно изменён!',
          text: 'Пароль был успешно изменён, Используйте данный пароль для последующих процессов авторизации.',
          btn: {
            link: 'Login',
            text: 'Войти'
          }
        },
        'shift-password': {
          title: 'Смена пароля',
          text: 'Придумайте новый пароль, впоследсвии вы сможете его сменить',
        },
        'shift-email': {
          title: 'Смена почты',
          text: 'Введите новый почтовый ящик',
        },
        'shift-email-success': {
          title: 'На ваш новый  e-mail  отправлено письмо с подтверждением',
          text: 'В течение 5 минут, на указанную вами почту, придёт письмо со ссылкой. Перейдите по ней, чтобы подтвердить e-mail.',
          btn: {
            link: '',
            text: 'Перейти в почту'
          }
        },
        'support': {
          title: 'Свяжитесь с нами!',
          text: 'Если у вас возникли проблемы с регитсрацией, авторизацией или другие технические трудности, напишите нам в службу поддержки, и мы постараемся вам помочь. В ближайшее время на указанную вами почту, придёт письмо с варимантам решения вашей проблемы.',
          btn: {
            link: 'Login',
            text: 'Войти'
          }
        }
      }
    }
  },
  getters: {
    getInfoById: state => (id, lang) => {
      return state.pages[lang][id]
    }
  },
  mutations: {},
  actions: {}
}
