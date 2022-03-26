import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
  return (
    <div className='py-5 my-5 faq-section'>
      <Accordion defaultActiveKey= "0">
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              How react works?
            </Accordion.Header>
            <Accordion.Body>
            আমরা যখন ব্রাউজারে কোন ডম তৈরি করি তখন রিএ্যাক্ট সেম টু সেম এই ব্রাউজারের মত আরেকটা ডম তৈরি করে যেটাকে বলা হয় ভার্চুয়াল ডম। এই ডম দেখতে পুরো আসল ডমের মতই,কিন্তু এই ভার্চুয়াল ডমটা আসলে একটা জাভাস্ক্রিপ অবজেক্ট। রিএ্যাক্ট এটাকে এমন ভাবে তৈরি করে যে এই ডমের সাথে সহজেই জাভাস্ক্রিপ ব্যাবহার করে যেকোন ইলিমেন্ট মডিফাই করা যায় কম সময়ের মধ্যে। এখানে রিএ্যাক্ট দুইটা ভার্চুয়াল ডম তৈরি করে, ইউজার যখন রিএ্যাক্ট অ্যাপের মধ্যে কোন অ্যাকশন নেয় বা ডমে কোন পরিবর্তন করে তখন রিএ্যাক্ট দুইটা ভার্চুয়াল ডমের মধ্যে একটাতে সেই চেন্জগুলো রাখে আর একটাতে আগের ভার্সনের গুলো রাখে।এখন আগেরটার সাথে নতুন টার তুলনা করে রিএ্যাক্ট দেখে ঠিক কোন ইলিমেন্ট টা পরিবর্তন করা হয়েছে। সে আনুসারে রিএ্যাক্ট পুরো ডমটাকে রি-রেন্ডার না করে শুধুমাত্র যেই জিনিসটা চেন্জ হয়েছে সেইটা চেন্জ করে। এতে সহজেই দ্রুত কাজ হয়ে যায় আর অতিরিক্ত বা অপ্রয়োজনীয় কোন কাজ করা লাগেনা। এভাবেই রিএ্যাক্ট এত ফাস্ট রেন্ডার করতে পারে ।
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              Props vs State
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <h3>Props</h3>
                <li>Props এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্ট এ ডাটা পাস করতে পারে।</li>
                <li>Child কম্পোনেন্ট থেকে এ্যাকসেস করা যায়</li>
                <li>কম্পোনেন্ট কে reusable করে</li>
                <li>Props অপরিবর্তনীয়</li>
                <li>একটা কম্পোনেন্ট থেকে অন্য কম্পোনেন্ট এ communicate করার জন্য ব্যাবহার করা হয়</li>
                <h3>State</h3>
                <li>Asynchronous ভাবে পরিবর্তন হতে পারে</li>
                <li>Child কম্পোনেন্ট থেকে এ্যাকসেস করা যায় না</li>
                <li>কম্পোনেন্ট কে reusable করে না</li>
                <li>State পরিবর্তনীয়</li>
                <li>State কম্পোনেন্ট এর তথ্য রাখে</li>
                <li>কম্পোনেন্ট এর সাথে dynamic পরিবর্তন রেন্ডার করার জন্য State ব্যাবহার করা যেতে পারে</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              How useState works?
            </Accordion.Header>
            <Accordion.Body>
            useStat is a Hook that allows you add React state to function components. We call it inside in a function component to add some local state to it. useState return a pair of the current state value and a function that lets you update it.React will preserve this state between re-renders.We can call this function from an event handler or somewhwer else.The useState() hook can be used to keep track of strings, numbers, booleans, arrays, objects etc etc which give us freedom to make complex user interfaces easily.
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;