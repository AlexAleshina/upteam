import React from 'react'
import Card, { STATUS_RUNNING, STATUS_PAUSED, STATUS_STOPPED } from './card'
import img from '../../images/Creative.png'

export default {
    title: 'Card',
    component: Card
}

const loadedProps = {
    image: img,
    nameOfCompany: 'Premium_Fit_1507114822_Mar_Bowl',
    compaignDates: '05 Mar 2020 - 05 Apr 2020',
    advertiser: 'Planet_Fitness',
    budgetTotal: 800,
    budgetSpent: 500,
    averageCPM: 55,
    currentVCR: 20,
    uniqueReach: 10000,
    frequency: 6,
    totalImpressions: 5000
}

const unloadedProps = {
    nameOfCompany: 'Premium_Fit_1507114822_Mar_Bowl',
    compaignDates: '05 Mar 2020 - 05 Apr 2020',
    advertiser: 'Planet_Fitness',
    budgetTotal: 800,
}


export const LoadedRunning = () => <Card {...loadedProps} status={STATUS_RUNNING} />
export const LoadedPaused = () => <Card {...loadedProps} status={STATUS_PAUSED} />
export const LoadedStoped = () => <Card {...loadedProps} status={STATUS_STOPPED} />
export const NoDataRunning = () => <Card {...unloadedProps} status={STATUS_RUNNING} />
export const NoDataPaused = () => <Card {...unloadedProps} status={STATUS_PAUSED} />
export const NoDataStopped = () => <Card {...unloadedProps} status={STATUS_STOPPED} />
export const Container = () => <div className="container"><Card {...loadedProps} status={STATUS_RUNNING} /><Card {...unloadedProps} status={STATUS_STOPPED} /><Card {...loadedProps} status={STATUS_PAUSED} /><Card {...loadedProps} status={STATUS_RUNNING} /><Card {...loadedProps} status={STATUS_RUNNING} /></div>