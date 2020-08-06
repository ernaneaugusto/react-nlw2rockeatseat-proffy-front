import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title='Estes são os Proffys disponíveis:'>
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject" placeholder='Português, Matemática, Informática...' />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" placeholder='Segunda' />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time" placeholder='00:00' />
                    </div>
                </form>
            </PageHeader>

            <main className='main'>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;