#!/usr/bin/env node

//Libraries to use
import chalk from 'chalk';
import  { Command } from 'commander';
const program = new Command();

//program functions
import { listTasks } from './commands/listTasks.js';

program
    .name('task-cli')
    .description('Your go to task tracker lmao')
    .version('0.1');

program
    .command('tasks')
    .description('List active tasks')
    .action(listTasks);


program.parse();