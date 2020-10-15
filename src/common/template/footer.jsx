import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
export default props =>(
    <div className='footer'>
        <LanguageDisplay content={{
            pt:'Desenvolvido por Enio Faria utilizando a tecnologia React + Redux',
            en: 'Developed by Enio Faria using React + Redux Technology'

        }}/>
    </div>
)