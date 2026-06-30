

/**
 * Widget Pilot Wealth Tool - Local Caching Data Engine
 * File: storage.js
 */

((window) => {
    'use strict';

    // Private namespace configuration key to prevent collisions with other sites
    const STORAGE_PREFIX = 'wp_wealth_';

    const StorageEngine = {
        /**
         * Save data to browser cache
         * @param {string} key - Unique data identifier path
         * @param {Object|Array|string|number} data - Value payload to store
         * @returns {boolean} - Status execution confirmation flag
         */
        save(key, data) {
            try {
                if (!key) throw new Error('Storage Engine: Key payload path is required.');
                
                // Convert objects and primitives cleanly into strings
                const serializedData = JSON.stringify(data);
                const scopedKey = `${STORAGE_PREFIX}${key}`;
                
                localStorage.setItem(scopedKey, serializedData);
                return true;
            } catch (error) {
                // Catches browser private mode restrictions or exceeded storage quota exceptions
                console.error(`Storage Engine Error [Save Fail]: ${error.message}`);
                return false;
            }
        },

        /**
         * Load data from browser cache
         * @param {string} key - Unique data identifier path
         * @returns {Object|Array|string|number|null} - Decoded target content structure or null
         */
        get(key) {
            try {
                if (!key) return null;

                const scopedKey = `${STORAGE_PREFIX}${key}`;
                const rawData = localStorage.getItem(scopedKey);

                if (!rawData) return null;

                // Turn the cached string structure back into usable JavaScript arrays/objects
                return JSON.parse(rawData);
            } catch (error) {
                console.error(`Storage Engine Error [Read Fail]: ${error.message}`);
                return null;
            }
        },

        /**
         * Remove a single localized object from browser memory
         * @param {string} key - Target data identifier path
         */
        remove(key) {
            try {
                if (!key) return;
                localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
            } catch (error) {
                console.error(`Storage Engine Error [Delete Fail]: ${error.message}`);
            }
        },

        /**
         * Completely purge all stored user information from your specific app keys
         */
        clearAllAppState() {
            try {
                // Loop backward to safely remove matching prefix objects without index shifting bugs
                Object.keys(localStorage).forEach(scopedKey => {
                    if (scopedKey.startsWith(STORAGE_PREFIX)) {
                        localStorage.removeItem(scopedKey);
                    }
                });
                return true;
            } catch (error) {
                console.error(`Storage Engine Error [Wipe Fail]: ${error.message}`);
                return false;
            }
        },

        /**
         * Diagnostics utility test to verify browser storage availability
         * @returns {boolean}
         */
        isAvailable() {
            try {
                const testKey = `${STORAGE_PREFIX}probe_test`;
                localStorage.setItem(testKey, '1');
                localStorage.removeItem(testKey);
                return true;
            } catch (e) {
                return false;
            }
        }
    };

    // Bind instance safely to global runtime scope window objects
    window.StorageEngine = StorageEngine;

})(window);
