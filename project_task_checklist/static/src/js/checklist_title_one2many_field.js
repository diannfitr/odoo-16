/** @odoo-module */

import { registry } from "@web/core/registry";
import { ChkTitleListRenderer } from "./checklist_title_list_renderer";
import { X2ManyField } from "@web/views/fields/x2many/x2many_field";

class ChkSectionFieldOne2ManyField extends X2ManyField {}
ChkSectionFieldOne2ManyField.components = {
    ...X2ManyField.components,
    ListRenderer: ChkTitleListRenderer,
};
ChkSectionFieldOne2ManyField.defaultProps = {
    ...X2ManyField.defaultProps,
    editable: "bottom",

};

registry.category("fields").add("checklist_title_one2many", ChkSectionFieldOne2ManyField);
