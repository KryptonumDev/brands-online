'use client'
import React, { useEffect, useState } from "react"
import styles from './styles.module.scss'
import Markdown from "@/utils/Markdown"
import Button from "@/components/atoms/Button"
import { motion } from 'framer-motion'
import Switch from "@/components/moleculas/Switch"

const CookieConsent = ({ data: {
  cookieConsent_Heading,
  cookieConsent_Description,
  cookieConsent_PreferencesTitle,
  cookieConsent_List,
}}) => {
  const [ showBanner, setShowBanner ] = useState(true);
  const [ showPreferences, setShowPreferences ] = useState(false);

  const [activeCookie, setActiveCookie] = useState(() => {
    const arr = []
    // detailsTab.cookies.forEach(el => {
    //   const isActive = el.workPartName === 'necessary'
    //   arr.push({ name: el.workPartName, isActive: isActive })
    // })
    return arr;
  })

  useEffect(() => {
    if (getCookie('necessary')) {
      dataLayerArguments("consent", "default", {
        'ad_storage': getCookie('marketing'),
        'analytics_storage': getCookie('statistics'),
        'functionality_storage': getCookie('necessary'),
        'personalization_storage': getCookie('preferences'),
        'unclassified_storage': getCookie('unclassified'),
        'wait_for_update': 2500
      });
      dataLayerArguments("set", "ads_data_redaction", true);
      setShowBanner(false);
    } else {
      dataLayerArguments("consent", "default", {
        'ad_storage': "denied",
        'analytics_storage': "denied",
        'functionality_storage': "denied",
        'personalization_storage': "denied",
        'security_storage': "granted",
        'unclassified_storage': "denied",
        'wait_for_update': 2500
      });
      dataLayerArguments("set", "ads_data_redaction", true);
      setShowBanner(false);
    }
  }, [showBanner])

  const acceptAll = () => {
    activeCookie.forEach(el => {
      setCookie(el.name, 'granted', 365)
    })
    dataLayerArguments('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': "granted",
      'functionality_storage': "granted",
      'personalization_storage': "granted",
      'unclassified_storage': "granted",
    });
    setShowBanner(false);
  }
  const acceptPart = () => {
    activeCookie.forEach(el => {
      setCookie(el.name, el.isActive ? 'granted' : 'denied', 365)
    })
    dataLayerArguments('consent', 'update', {
      'ad_storage': getCookie('marketing'),
      'analytics_storage': getCookie('statistics'),
      'functionality_storage': getCookie('necessary'),
      'personalization_storage': getCookie('preferences'),
      'unclassified_storage': getCookie('unclassified'),
    });
    setShowBanner(false);
  }
  const changeTabs = (index) => {
    const arr = [...activeCookie]
    if (arr[index].name === "necessary") {
      return null;
    }
    arr[index].isActive = !arr[index].isActive;
    setActiveCookie(arr);
  }
  const rejectAll = () => {
    activeCookie.forEach(el => {
      setCookie(el.name, 'denied', 365);
    })
    dataLayerArguments('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': "denied",
      'functionality_storage': "denied",
      'personalization_storage': "denied",
    });
    setShowBanner(false);
  }

  return (
    <aside className={styles.wrapper} aria-hidden={!showBanner} data-lenis-prevent>
      <button
        className={styles.close}
        onClick={() => rejectAll()}
      >
        Deny
        <Close />
      </button>
      <div className={styles.overflow}>
        <header>
          <p className={styles.heading}>{cookieConsent_Heading}</p>
          <Markdown className={styles.description}>{cookieConsent_Description}</Markdown>
        </header>
        <motion.div
          className={styles.preferences}
          initial={{ height: 0 }}
          animate={{ height: showPreferences ? 'auto' : 0 }}
          exit={{ height: 0 }}
        >
          <p className={styles.preferencesTitle}>{cookieConsent_PreferencesTitle}</p>
          {cookieConsent_List.map(({ title, description }, i) => (
            <div className={styles.item} key={i}>
              <label className={styles.title}>
                <Markdown>{title}</Markdown>
                <Switch
                  onClick={() => changeTabs()}
                  hasLabel={false}
                />
              </label>
              <Markdown className={styles.description}>{description}</Markdown>
            </div>
          ))}
        </motion.div>
      </div>
      <div className={styles.actionTab}>
        <button
          className={styles.preferences}
          onClick={() => showPreferences ? acceptPart() : setShowPreferences(true)}
        >
          {showPreferences ? 'Confirm my preferences' : 'Preferences'}
        </button>
        <Button
          onClick={() => acceptAll()}
        >Accept all</Button>
      </div>
    </aside>
  )
}

const dataLayerArguments = () => {
  // eslint-disable-next-line no-undef
  if (arguments) {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-undef
    window.dataLayer.push(arguments);
  }
}
const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/;SameSite=Strict`;
}
const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default CookieConsent;

const Close = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='12.75 12.25 23.5 23.5'
    width="22"
    height="22"
  >
    <path
      stroke='#434242'
      d='M35.75 12.75l-22.5 22.5m0-22.5l22.5 22.5'
    ></path>
  </svg>
)