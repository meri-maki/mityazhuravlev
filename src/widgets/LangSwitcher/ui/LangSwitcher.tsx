import { useTranslation } from 'react-i18next'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button theme={ButtonTheme.PRIMARY} onClick={toggle}>
            {t('lang')}
        </Button>
    )
}
